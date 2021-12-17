import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartbeat, faSeedling, faWalking } from '@fortawesome/free-solid-svg-icons';
import initialScript from './initialScript';
import logo from './image/logo.png';
import './styles.css';

const Content = () => {

    useEffect(()=>{
        window.scroll(0,0);
        initialScript("start");
        return(()=>{
            initialScript("destroy");
        });
    });
    return(

        //<script src="https://kit.fontawesome.com/5f8b2f9e86.js" crossorigin="anonymous"></script>
        <div className="stylesDestinoProductos">
            <section id="container">
                <a href="#header">
                    <div id="btn-volver">
                        Inicio
                    </div>
                </a>
                <header id="header">
                    <div id="logo-container">
                        <img id="header-img" src={logo} height="200" width="auto" title="Comiendo sano" alt="Comiendo sano"/>
                    </div>
                    <h1>Semillas y frutos secos</h1>
                    <div id="nav-sustituto"></div>
                    <nav id="nav-bar" className="nav-bar">
                        <ul>
                    {/* iframe */}
                    {/* <!--Notará que href está tanto en elemntos li como en elementos a, esto es para pasar la prueba, el atributo que funciona es el del anchor--> */}

                            <li className="nav-link" href="#beneficios"><a href="#beneficios">Beneficios</a></li>
                            <li className="nav-link" href="#video"><a href="#video">Video</a></li>
                            <li className="nav-link" href="#precios"><a href="#precios">Compras</a></li> 
                        </ul>
                    </nav>
                </header>

                <main id="main">
                    <section id="principal">
                        <section id="formulario">
                            <form id="form" method="post" action="https://www.freecodecamp.org/email-submit">
                                <h4>Reciba todas las novedades</h4>
                                <input type="email" id="email" name="email" placeholder="Ingrese su correo electrónico" required/>
                                <input type="submit" id="submit" className="btn" value="Comenzar"/>
                            </form>
                        </section>
                        <section id="beneficios">
                            <div className="grid">
                                <div className="icono" style={{animationDuration:"1.2s"}}> 
                                    <FontAwesomeIcon className="fas" icon={faHeartbeat} />
                                </div>
                                <div className="sub">
                                    <h2>Nutritivos y beneficiosos para el sistema cardiovascular</h2>
                                </div>
                                <div className="parrafo">
                                    <p>Sus grasas protegen frente a la aparición y desarrollo de la aterosclerosis debido a la ausencia total de colesterol y a su capacidad para disminuir el colesterol sanguíneo total. A este efecto, ya de por sí beneficioso, se añade el hecho de que consumirlos mantiene o incrementa de forma ligera el colesterol HDL ("el bueno"), por lo que el riesgo cardiovascular total disminuye.</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="icono" style={{animationDuration:"2s"}}> 
                                    <FontAwesomeIcon className="fas" icon={faWalking} />
                                </div>
                                <div className="sub">
                                    <h2>Ricos en fibras, proteínas y minerales</h2>
                                </div>
                                <div className="parrafo">
                                    <p>Otro componente importante de los frutos secos es la fibra, que además de prevenir el estreñimiento, inhibe la absorción digestiva del colesterol que aportan algunos alimentos. Los frutos secos son en general una buena fuente de proteínas (del 10 al 26%) que destacan por su riqueza en arginina. Este aminoácido da lugar a la formación del óxido nítrico, compuesto que favorece el buen tono muscular en la pared de las arterias al facilitar su dilatación y disminuir el riesgo de hipertensión arterial.</p>
                                </div>
                            </div>
                            <div className="grid">
                                <div className="icono" style={{animationDuration:"1.6s"}}> 
                                    <FontAwesomeIcon className="fas" icon={faSeedling} />
                                </div>
                                <div className="sub">
                                    <h2>Elígelos sin tostar, con cáscara y sin sal</h2>
                                </div>
                                <div className="parrafo">
                                    <p>Para aprovechar todas las propiedades de los ácidos grasos y de los compuestos antioxidantes –incluida la vitamina E– es preferible consumirlos sin tostar. Una parte importante de sus antioxidantes se localizan en su cutícula, por lo que se recomienda ingerirlos en crudo y con piel para aprovechar al máximo sus propiedades saludables. Por otra parte, el tostado y la fritura desvirtúan la calidad de sus grasas. ambién es preferible tomar los frutos secos sin salar. El salado incrementa el consumo de cloruro sódico y puede ser contraproducente para las personas con hipertensión arterial.</p>
                                </div>
                            </div>
                        </section>

                        <section id="video-container" className="centrado">
                            <iframe id="video" width="640" height="360" src="https://www.youtube.com/embed/MmwwXPPFDd8" title="Semillas, comiendo sano" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
                        </section>
                    </section>

                    <section id="precios">
                        <div className="producto">
                            <div className="categoria">Semillas de girasol (1 kg)</div>
                            <h3>$1200</h3>
                            <ol>
                                <li>Vitamina E</li>
                                <li>Ricas en minerales</li>
                                <li>Ácidos grasos saludables</li>
                                <li>Ricas en fibra</li>
                            </ol>
                            <button className="btn">¡Lo quiero!</button>
                        </div>

                        <div className="producto">
                            <div className="categoria">Pasas de uva (1 kg)</div>
                                <h3>$900</h3>
                                <ol>
                                    <li>Nutrientes concentrados</li>
                                    <li>Fuente de fibra</li>
                                    <li>Fuente de hidratos de carbono</li>
                                    <li>Propiedades antiinflamatorias</li>
                                </ol>
                                <button className="btn">¡Lo quiero!</button>
                        </div>

                        <div className="producto">
                            <div className="categoria">Semillas de chía (1 kg)</div>
                            <h3>$1050</h3>
                            <ol>
                                <li>Ácidos grasos omega-3</li>
                                <li>Ácidos grasos omega-6</li>                           
                                <li>Alto contenido de fibra</li>
                                <li>Gran cantidad de antioxidantes</li>
                            </ol>
                            <button className="btn">¡Lo quiero!</button>
                        </div>

                        <div className="producto">
                            <div className="categoria">Nueces (1 kg)</div>
                            <h3>$1100</h3>
                            <ol>
                                <li>Ácidos grasos omega-3</li>
                                <li>Ácidos grasos omega-6</li>
                                <li>Efectos antiinflamatorios</li> 
                                <li>Vitaminas</li>
                            </ol>
                            <button className="btn">¡Lo quiero!</button>                        
                        </div>

                        <div className="producto">
                            <div className="categoria">Almendras (1 kg)</div>
                            <h3>$1500</h3>
                            <ol>
                                <li>Más fibra que todos</li>
                                <li>Buen aporte de carbohidratos</li>
                                <li>Minerales</li>
                                <li>Vitaminas</li>
                            </ol>
                            <button className="btn">¡Lo quiero!</button>
                        </div>

                        <div className="producto">
                            <div className="categoria">Mix de semillas (1 kg)</div>
                            <h3>$1600</h3>
                            <ol>
                                <li>Amaranto</li>
                                <li>Lino</li>
                                <li>Sésamo</li>
                                <li>Quinoa</li>
                            </ol>
                            <button className="btn">¡Lo quiero!</button>
                        </div>
                    </section>
                </main>
            </section>
        </div>
    );
}

export default Content;