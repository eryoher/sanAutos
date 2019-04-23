import React, { Component } from 'react'
import { translate } from 'react-i18next';
import { Row, Col, Button, Upload, Icon, Modal, message } from 'antd'
import _ from 'lodash'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig();

class UploadFiles extends Component {

    constructor(props) {
        super(props)
        this.state = {
            fileList: [],
            toRemove: [],
            previewImage: '',
            previewVisible: false,
            isRemoveModalVisible: false
        },
            this.allowedFileSize = publicRuntimeConfig.allowedImageFileSize,
            this.allowedFileTypes = publicRuntimeConfig.allowedImageFileTypes
    }

    allFilesToShow() {
        return this.remotesToShow(this.props.uploadedFiles).concat(this.state.fileList)
    }



    render() {
        if (this.props.noContainer) {
            return (<Row>{this.singleUploadComponent()}</Row>)
        } else {
            return (<Row> {this.uploadWithContainer()} </Row>)
        }
    }

    uploadWithContainer() {
        const { t } = this.props
        return (
            <Col md={24} className="uploader-image-container">
                <div className="images-upload-container" >

                    {this.singleUploadComponent()}

                </div>

            </Col>
        )
    }

    singleUploadComponent() {
        const files = this.allFilesToShow()
        
        return (
            <div>
                <Upload
                    listType="picture-card"
                    fileList={files}
                    onChange={this.handleChange}
                    onPreview={this.handlePreview}
                    beforeUpload={this.beforeUpload}
                    onRemove={this.onRemove}
                    multiple={false || this.props.multiple}
                >
                    {this.props.limit && files.length == this.props.limit ? null : this.renderUploadButton()}
                </Upload>
                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancelPreview}>
                    <img style={{ width: '100%' }} src={this.state.previewImage} />
                </Modal>
            </div>

        )
    }

    buildimageModificationsPayload() {
        return {
            imagesToRemove: this.buildImageFilesNamesToRemove(),
            imagesToSave: this.buildBinaryFilesToSave()
        }

    }


    _onChange = () => {
        const imagesModificationsPayload = {
            all: this.remotesToShow(this.props.uploadedFiles).concat(this.state.fileList),
            toRemove: this.buildImageFilesNamesToRemove(),
            toSave: this.buildBinaryFilesToSave()
        }
        this.props.onChange(imagesModificationsPayload)
    }



    handleCancelPreview = () => {
        this.setState({ previewVisible: false, previewImage: '' })
    }


    handlePreview = (file) => {
        //console.log("file", file)
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    }

    buildBinaryFilesToSave() {
        return this.state.fileList.map(file => file.originFileObj)
    }

    buildImageFilesNamesToRemove() {
        const toRemoveFiles = _.filter(this.state.toRemove, remote => { return remote.status === "removed" && remote.origin === "remote" })
        return toRemoveFiles.map(toRemove => { return toRemove.name })

    }

    beforeUpload = (file) => {
        const { t } = this.props
        if (!this.isFileAllowed(file)) {
            message.error('Imagen no permitida.');
        }
        return false;
    }

    onRemove = (file) => {
        const { t } = this.props;
        Modal.confirm({
            title: 'Seguro desea borrar la imagen',
            onOk: () => this.remove(file),
            onCancel() { },
        });

    }

    remove = (fileToRemove) => {
        if (fileToRemove.origin === "remote") {
            const toRemove = this.state.toRemove.concat(fileToRemove)
            this.setState({ toRemove: toRemove }, () => {
                this._onChange()
            })
        } else {
            const filteredFileList = _.filter(this.state.fileList, file => { return file.uid !== fileToRemove.uid })
            this.setState({ fileList: filteredFileList }, () => {
                this._onChange()
            })
        }
    }

    /*
    * First we pass the file size ( in bytes) to Kbytes, then we pass those KB to MB
    */
    fileInMB = (file) => {
        const fileInBytes = file.size / 1000
        return (fileInBytes / 1024) //return file in MB
    }

    isFileAllowed = (file) => {
        return this.allowedFileTypes.includes(file.type) && this.fileInMB(file) < this.allowedFileSize;

    }

    handleChange = ({ file, fileList }) => {
        if (this.isFileAllowed(file) && !this.isAdded(file)) {
            const filteredFileList = _.filter(fileList, file => { return file.origin !== 'remote' })
            this.setState({ fileList: filteredFileList }, () => {
                this._onChange()
            })
        }
    }

    isAdded(file) {
        const filtered = _.filter(this.state.fileList, aFile => { return aFile.uid === file.uid })
        return filtered.length > 0;
    }


    remotesToShow = (remotes) => {
        const remotes_deleted = _.filter(this.state.toRemove, file => { return file.status === 'removed' })
        return _.differenceBy(remotes, remotes_deleted, 'name')
    }

    renderUploadButton() {
        return (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        )
    }

    isButtonDisabled = () => {
        return this.state.toRemove.length == 0 && this.state.fileList.length == 0
    }

}


export default UploadFiles;
