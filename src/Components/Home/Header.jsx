

const Header = () => {
    return (
        <> 
<div className=" grid grid-cols-1 lg:grid-cols-3"> 
<img className="mask mask-heart bg-rose-400 w-96" src="https://i.ibb.co/7tKrkX2/faruk-2.png" />
<img className="mask mask-heart bg-rose-400 w-96" src="https://i.ibb.co/7tKrkX2/faruk-2.png" />
<img className="mask mask-heart bg-rose-400 w-96" src="https://i.ibb.co/7tKrkX2/faruk-2.png" />

</div>

        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/WGMQ86v/d1.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold"> This is my Code</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Hire</button>
                </div>
            </div>
        </div>
        </>

    );
};

export default Header;