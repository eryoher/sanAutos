import React, { Component } from 'react';
import Link  from 'next/link'
import { Row, Col, Menu, Divider } from 'antd';

export default class MenuAdmin extends Component {
  
    constructor(props) {
        super(props);
        this.state = {
        isOpen: false,
            collapsed : true,
        };
    }


    render() {
        const {showMenu} = this.props;
        return (
            <Col span={17} offset={3} style={{textAlign:'center', top:'1em'}} >
                { showMenu && <Menu
                    mode="horizontal"
                    className={'menu-container'}                
                >                
                    <Menu.Item key={'home'}>                            
                        <Link href={{ pathname: '/admin'}}><a>Inicio</a></Link>
                    </Menu.Item>
                    <Menu.Item key={"test"} disabled>
                        <Divider type={"vertical"} />
                    </Menu.Item>
                    <Menu.Item key={'Products'}>                            
                        <Link href={{ pathname: '/adminPromotions'}}><a>Productos</a></Link>
                    </Menu.Item>
                    <Menu.Item key={"test2"} disabled>
                        <Divider type={"vertical"} />
                    </Menu.Item> 
                    <Menu.Item key={'categories'}>                            
                        <Link href={{ pathname: '/adminCategories'}}><a>Categorias</a></Link>
                    </Menu.Item>                   
                    <Menu.Item key={"test3"} disabled>
                        <Divider type={"vertical"} />
                    </Menu.Item>
                    <Menu.Item key={'subCategories'}>                            
                        <Link href={{ pathname: '/adminSubcategories'}}><a>Sub Categorias</a></Link>
                    </Menu.Item>
                    <Menu.Item key={"test4"} disabled>
                        <Divider type={"vertical"} />
                    </Menu.Item>
                    <Menu.Item key={'usuarios'}>                            
                        <Link href={{ pathname: '/adminusers'}}><a>Usuarios</a></Link>
                    </Menu.Item>
                </Menu>}
            </Col>                       
        );
    }
}