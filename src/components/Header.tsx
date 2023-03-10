import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
    return (
        <>

            <div className="container col-xxl-12 px-1">
                <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                    <Link href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <Image 
                            src={'/logo_512px.png'}
                            alt='principal logo Sien services'
                            width={150}
                            height={70}
                        />
                    </Link>
                </header>
            </div>
            <section className='header'>
                <div className=" container col-xxl-12 px-1 py-5">
                    <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
                        <div className="col-10 col-sm-8 col-lg-7">
                            <Image 
                                className="d-block mx-lg-auto img-fluid"
                                loading="lazy"
                                src={'/business-analysis.svg'}
                                alt='Image of two people working around softwares and apps'
                                width={600}
                                height={400}
                            />
                        </div>
                        <div className="col-lg-5">
                            <h1 className="title display-5 fw-bold lh-1 mb-5">
                                Improving your business
                            </h1>
                            <p className="aliado lead mb-5">
                                El aliado estratégico que tu negocio o evento necesita para ofrecer una experiencia única e irrepetible
                            </p>
                            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                                <a href="https://walink.co/af7c2b" type="button" className="btn btn-primary btn-lg px-4 me-md-2" target='_blank' rel="noreferrer">
                                    Contáctanos
                                </a>
                                <a href="#how-it-works" type="button" className="btn btn-outline-secondary btn-lg px-4">
                                    Cómo funciona
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
};

export default Header;