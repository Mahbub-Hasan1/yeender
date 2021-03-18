import React from 'react';

const FeatureArea = () => {
    const sdk = 5;
    return (
        <div className="feature-area">
            <div className="container-xl">
                <div className="row">
                    <div className="col-md-4 feature-items-card">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img
                                    src="https://stacksolution.dev/api/uploads/01_7b8f7884f6.png"
                                    alt=""
                                />
                            </div>{' '}
                            <div className="col-md-9 box-info">
                                <h5>Creative Team</h5>
                                <p>We have a highly talented and powerful creative team</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 feature-items-card">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img
                                    src="https://stacksolution.dev/api/uploads/02_daf9f0fa66.png"
                                    alt=""
                                />
                            </div>{' '}
                            <div className="col-md-9 box-info">
                                <h5>Creative Team</h5>
                                <p>We have a highly talented and powerful creative team</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 feature-items-card">
                        <div className="row align-items-center">
                            <div className="col-md-3">
                                <img
                                    src="https://stacksolution.dev/api/uploads/03_4868b48036.png"
                                    alt=""
                                />
                            </div>
                            <div className="col-md-9 box-info">
                                <h5>Creative Team</h5>
                                <p>We have a highly talented and powerful creative team</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureArea;
