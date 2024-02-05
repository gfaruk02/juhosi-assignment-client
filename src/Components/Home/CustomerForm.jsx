
const CustomerForm = () => {
    const handleCustomerForm = e =>{
        e.preventDefault();
        const form = e.target;
        const date = form.date.value;
        const company = form.company.value;
        const owner = form.owner.value;
        const item = form.item.value;
        const quantity = form.quantity.value;
        const weight = form.weight.value;
        const shipment = form.shipment.value;
        const trackingId = form.trackingId.value;
        const shipmentSize = form.shipmentSize.value;
        const boxCount = form.boxCount.value;
        const specification = form.specification.value;
        const checklistQuantity = form.checklistQuantity.value;
       
        const customerFormData = {date,company, owner, item,quantity,weight,shipment,trackingId, shipmentSize,boxCount,specification,checklistQuantity }
        console.log(customerFormData);
    }
    return (
        <div className="hero bg-base-100">
            <div className="hero-content">
            <div className="card shrink-0 w-[380px] shadow-2xl bg-base-100">
                    <form className="card-body" onSubmit={handleCustomerForm}>


                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Order Date</span>
                            </label>
                            <input name="date" type="date" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Company</span>
                            </label>
                            <input name="company" type="Text" placeholder="Company Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Owner</span>
                            </label>
                            <input name="owner" type="text" placeholder="Owner" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Item</span>
                            </label>
                            <input name="item" type="text" placeholder="Item" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Quantity</span>
                            </label>
                            <input name="quantity" type="text" placeholder="quantity" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Weight</span>
                            </label>
                            <input name="weight" type="text" placeholder="weight" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Shipment</span>
                            </label>
                            <input name="shipment" type="text" placeholder="shipment" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">TrackingId</span>
                            </label>
                            <input name="trackingId" type="text" placeholder="trackingId" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Shipment Size</span>
                            </label>
                            <input name="shipmentSize" type="text" placeholder="shipmentSize" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Box Count</span>
                            </label>
                            <input name="boxCount" type="text" placeholder="boxCount" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Specification</span>
                            </label>
                            <input name="specification" type="text" placeholder="specification" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Checklist Quantity</span>
                            </label>
                            <input name="checklistQuantity" type="text" placeholder="checklistQuantity" className="input input-bordered" required />
                        </div>


                        <div className="form-control mt-6">
                            <button className="btn btn-primary text-white font-semibold bg-green-700 hover:bg-green-900"> Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CustomerForm;