import React from "react";
import { ContainerStyledHeader, Li } from "./Styles"
import { Link, Outlet } from "react-router-dom"


export default function Header() {

    return (
        <>
            <ContainerStyledHeader>

                <header>
                

                    <div class="box">
                    
                        <nav>
                            <ul>
                                <Li>
                                    <Link className="linkRouter" to="home">
                                        
                                    </Link>
                                    <Link className="linkRouter" to="code">
                                       
                                    </Link>
                                    <Link className="linkRouter" to="musicas">
                                       
                                    </Link>
                                    <Link className="linkRouter" to="contato">
                                       
                                    </Link>
                                    <Link className="linkRouter" to="bonus">
                                        
                                    </Link>
                                    <Outlet/>
                                </Li>

                            </ul>

                        </nav>
                    </div>



                </header>

            </ContainerStyledHeader>





        </>
    )
}