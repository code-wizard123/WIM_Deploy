import React from 'react';

const Receipt = (props) => {
    const { name, phoneNumber, email, amount, orderID, PaymentID, orderSignature, address } = props
    return (
        <div className="receipt-content">
            <div className="container bootstrap snippets bootdey">
                <div className="row">
                    <div className="col-md-12">
                        <div className="invoice-wrapper">
                            <div className="intro">
                                Hi <strong>{name}</strong>,
                                <br />
                                This is the receipt for a payment of <strong>${amount}</strong> (USD) for your works
                            </div>

                            {/* Payment Information Section */}
                            <div className="payment-info">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <span>Payment No.</span>
                                        <strong>{PaymentID}</strong>
                                    </div>
                                    <div className="col-sm-6">
                                        <span>Order No.</span>
                                        <strong>{orderID}</strong>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Details Section */}
                            <div className="payment-details">
                                <div className="row">
                                    <div className="col-sm-12">
                                        <span>Client</span>
                                        <strong>{name}</strong>
                                        <p>
                                            {address} <br />
                                            <a href="mailto:john@example.com">{email}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Line Items Section */}
                            <div className="line-items">
                                <div className="headers clearfix">
                                    <div className="row">
                                        <div className="col-xs-4">Description</div>
                                        <div className="col-xs-3">Quantity</div>
                                        <div className="col-xs-5 text-right">Amount</div>
                                    </div>
                                </div>
                                <div className="items">
                                    {/* Item 1 */}
                                    <div className="row item">
                                        <div className="col-xs-4 desc">Donation</div>
                                        <div className="col-xs-3 qty">1</div>
                                        <div className="col-xs-5 amount text-right">${amount}</div>
                                    </div>
                                </div>
                            </div>

                            {/* Total Section */}
                            <div className="total text-right">
                                <div className="field">
                                    Subtotal <span>${amount}</span>
                                </div>
                                <div className="field">
                                    Shipping <span>$0.00</span>
                                </div>
                                <div className="field">
                                    Discount <span>None</span>
                                </div>
                                <div className="field grand-total">
                                    Total <span>${amount}</span>
                                </div>
                            </div>

                            {/* Print Section */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Receipt;