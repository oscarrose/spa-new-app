import React from 'react'
import "../styleLogin.css"

export default function Login() {
    return (
        <div className='content-login'>
            <section className="cardInput">

                <div className="cardElements">

                    <h1 className='h1'>Login</h1>

                    <form>

                        <div>
                            <label for="inputUser">User</label>
                            <input className="inputLogin" type="email" id="inputUser" name="user" required />
                            <p hidden className="error" id="errorUser"> </p>

                        </div>
                        <div>
                            <label for="inputPassword">Password</label>
                            <input className="inputLogin" type="password" id="inputPassword" name="password" required minlength="8" />
                            <p hidden className="error" id="errorPassword"> </p>
                        </div>

                        <br />
                        <button className="buttonLogin" id="btnEnter">Enter</button>


                    </form>

                </div>

            </section>
        </div>
    )
}
