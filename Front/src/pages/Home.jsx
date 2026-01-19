import Footer from '../components/Footer/Footer'
import Gallery from '../components/Gallery/Gallery'
import './css_style/home_style.css'
const Home = () => {
    const data = [
        { image: '/images/1.png' },
        { image: '/images/2.png' },
        { image: '/images/3.png' },
    ]

    return (
        <>
            <div
                className="hero min-h-screen justify-items-start"
                style={{
                    backgroundImage: "url('/images/Logo.png')",
                }}
            >
                <div className="hero-overlay "></div>
                <div className="hero-content text-neutral-content ">
                    <div className="max-w-md">
                        <h1 className=" text-5xl font-bold ">Hola,</h1>
                        <h1 className="mb-6 text-3xl font-bold">
                            listo para tu proxima alfombra!
                        </h1>
                        <p className="mb-2">
                            Alfombras hechas a mano con técnica tufting
                        </p>
                        <p>Diseños personalizados para tu espacio</p>
                    </div>
                </div>
            </div>
            <div className="Work">
                <section className="py-20 px-6">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-4xl font-serif text-center mb-12 text-white">
                            ¿Cómo trabajamos?
                        </h2>

                        <div className="grid gap-8 md:grid-cols-3">
                            
                            <div className="card shadow-md p-6 text-center">
                                <div className="text-5xl mb-4">🎨</div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    1. Enviás tu idea
                                </h3>
                                <p className="text-sm text-white">
                                    Nos contactás y nos
                                    enviás tu diseño, referencia o idea. También
                                    podés decirnos medidas, colores y uso
                                    (habitación, living, regalo, etc).
                                </p>
                            </div>

                            <div className="card shadow-md p-6 text-center">
                                <div className="text-5xl mb-4">📝</div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    2. Te enviamos propuesta
                                </h3>
                                <p className="text-sm text-white">
                                    Te armamos una propuesta personalizada con
                                    diseño, tamaño, precio y tiempo estimado de
                                    entrega. Si querés cambios, lo ajustamos
                                    hasta que quede perfecto.
                                </p>
                            </div>

                            <div className="card  shadow-md p-6 text-center">
                                <div className="text-5xl mb-4">🧶</div>
                                <h3 className="text-xl font-semibold mb-2 text-white">
                                    3. Creamos tu alfombra
                                </h3>
                                <p className="text-sm text-white">
                                    Una vez confirmado, comenzamos la producción
                                    artesanal con técnica tufting. Te mantenemos
                                    al tanto del proceso y te entregamos tu
                                    alfombra.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <Gallery />
            <Footer />
        </>
    )
}
export default Home
