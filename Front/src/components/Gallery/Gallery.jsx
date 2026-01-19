const Gallery = () =>{

return (
<div className="gallery p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <span className="text-rotate text-4xl font-[Poppins] col-span-full">
                    <span className="mb-6 justify-items-center">
                        <h2 className="text-white font-serif text-6xl text-center mb-10">
                            Otros Pedidos
                        </h2>
                    </span>
                </span>

                <div className="card card-sm bg-base-200 max-w-60 shadow p-2">
                    <figure className="hover-gallery">
                        <img src="/images/1.png" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Alfombra Hombre Araña.
                        </h2>
                        <p>a pedido</p>
                        <p>📏 50 cm de diámetro.</p>
                    </div>
                </div>

                <div className="card card-sm bg-base-200 max-w-60 shadow p-2 group overflow-hidden">
                    <figure className="relative h-48">
                        <img
                            src="/images/2.png"
                            alt="Producto principal"
                            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                        />
                        <img
                            src="/images/2-1.png"
                            alt="Producto hover"
                            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                        />
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Tag del ACRU para un pana 🙌
                        </h2>
                        <p>📏 60 x 40 cm.</p>
                    </div>
                </div>

                <div className="card card-sm bg-base-200 max-w-60 shadow p-2">
                    <figure className="hover-gallery">
                        <img src="/images/3.png" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title flex justify-between">
                            Alfombra de Snoopy en su casita roja
                        </h2>
                        <p>📏 50 cm de diámetro.</p>
                    </div>
                </div>
            </div>

)

}
export default Gallery