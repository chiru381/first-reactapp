import React from 'react';

function Bs1(){
    return<>
    <nav className="navbar navbar-dark bg-dark mt-5">
    
    </nav>
    
    <div className="container mt-4">
        <div className="row">
            <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                    <h1>heading...</h1>
                </div>
                <div className="card-body">
                    <h4>heading</h4>
                    <p>This is a heading and the paragraph.
                        all of the developers uses to bootstrap.
                        easy to use and make faster work.
                    </p>
                    <button className="alert alert-primary">click</button>
                    
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                <h1>heading...</h1>
                </div>
                <div className="card-body">
                    <h4>heading</h4>
                    <p>This is a heading and the paragraph.
                        all of the developers uses to bootstrap.
                        easy to use and make faster work.
                    </p>
                    <button className="btn btn-primary outline-primary disabled">clickhere</button>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                <h1>heading...</h1>
                </div>
                <div className="card-body">
                    <h4>heading</h4>
                    <p>This is a heading and the paragraph.
                        all of the developers uses to bootstrap.
                        easy to use and make faster work.
                    </p>
                    <button className="badge round-pill bg-primary">badge</button>
                </div>
            </div>
            </div>
            <div className="col-md-3">
            <div className="card">
                <div className="card-header">
                <h1>heading...</h1>
                </div>
                <div className="card-body">
                    <h4>heading</h4>
                    <p>This is a heading and the paragraph.
                        all of the developers uses to bootstrap.
                        easy to use and make faster work.
                    </p>
                    <button className="btn btn-success btn-lg">success</button>
                    <button className="btn btn-outline-danger">outline</button>
                </div>
            </div>
            </div>

            <form className="form-group">
                <h2>LoginForm</h2>
                <input type="text" className="form-control" placeholder="username"/>
            </form>
            <h2>Alert box
                <span className="badge bg-success">badge</span>
                <span class="badge rounded-pill bg-warning text-dark">roundpill</span>
                </h2>
            <div className="alert alert-danger" role="alert">
                alert
            </div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page" >Library</li>
                </ol>
            </nav>
            <div className="d-grid gap-2">
                <button className="btn btn-primary" type="button">Button</button>
                <button className="btn btn-info" type="button">Button</button>
            </div>
            <div className="d-grid gap-2 d-md-block">
                <button className="btn btn-primary" type="button">Button</button>
                <button className="btn btn-primary" type="button">Button</button>
            </div>
            <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button">Button</button>
                <button className="btn btn-primary" type="button">Button</button>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                 <button className="btn btn-primary me-md-2" type="button">Button</button>
                 <button className="btn btn-primary" type="button">Button</button>
            </div>
        </div>
    </div>
    </>
}
export default Bs1;