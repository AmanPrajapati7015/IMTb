function SignForm({onSubmit, purpose}){
    return (<>
        <div className="container">
            <div className="wrap" >
                <div className="field">
                    <label htmlFor="username">User Name : </label>
                    <input id="username" placeholder="username" type="text" />
                </div>
                <div className="field">
                    <label htmlFor="password">Password : </label>
                    <input id="password" placeholder="password" type="password" />
                </div>
                <div className="field">
                    <button onClick={onSubmit} >{purpose}</button>
                </div>
            </div>
        </div>
    </>)
}
export default SignForm