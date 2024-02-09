

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
                    <button className="btn btn-primary">
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>
<dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">Press ESC key or click the button below to close</p>
    <div className="modal-action">
      <form method="dialog">
        {/* if there is a button in form, it will close the modal */}
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>

                    </button>
                </div>
            </div>
        </div>
        </>

    );
};

export default Header;