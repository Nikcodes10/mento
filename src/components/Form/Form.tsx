import './Form.css';

export default function Form() {
    return(
        <div className='form__encloser'>
            <section>
                <h1>Let&apos;s level up your brand together</h1>
                <p>You can reach us anytime via someone@somewhere.domain</p>
            </section>
            <main className='form__main'>
                <form name='message'>
                    <div className='form__formField'>
                        <label htmlFor='name'>
                            Name
                        </label>
                        <input id='name' name='name' type="text" placeholder='Your name'/>
                    </div>
                    <div className='form__formField'>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <input id='email' name='email' type="email" placeholder='someone@somewhere.domain'/>
                    </div>
                    <div className='form__formField'>
                        <label htmlFor='phone'>
                            Phone
                        </label>
                        <input id='phone' name='phone' type="phone" placeholder='+91 7652341568'/>
                    </div>
                    <div className='form__formField'>
                        <label htmlFor='help'>
                            How can we help?
                        </label>
                       <textarea name="help" id="help" rows={6} placeholder='Briefly decribe'></textarea>
                    </div>
                    <section>
                        <label>Services</label>
                        <br/>
                        <div className='form__checkboxes'>
                            <div className='form__checkbox'>
                                <label htmlFor='webdesign'>Web Design</label>
                                <input type="checkbox" name="webdesign" id="webdesign"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='contentcreation'>Content Creation</label>
                                <input type="checkbox" name="contentcreation" id="contentcreation"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='uxdesign'>UX Design</label>
                                <input type="checkbox" name="uxdesign" id="uxdesign"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='strategy'>Strategy and Consulting</label>
                                <input type="checkbox" name="strategy" id="strategy"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='research'>User Research</label>
                                <input type="checkbox" name="research" id="research"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='other'>Other</label>
                                <input type="checkbox" name="other" id="other"/>
                            </div>
                        </div>
                    </section>
                    <button type="button">Send Message</button>
                </form>
            </main>
        </div>
    )
}