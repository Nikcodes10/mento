import { useRef, useState } from 'react';
import './Form.css';

export default function Form() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [services, setServices] = useState([]);

    const [phoneErr, setPhoneErr] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [descErr, setDescErr] = useState('');

    const [loading, setLoading] = useState(false);

    const form : any = useRef()

    const handleSubmit = async (e :any) => {
        e.preventDefault();
        if(phone.length < 10) {
            setPhoneErr('Please enter a valid phone number!');
            return;
        }
        if(!email.includes('@') || !email.includes('.') || email.startsWith('@') || email.startsWith('.') || email.endsWith('@') || email.endsWith('.')) {
            setEmailErr('Please enter a valid email!');
            return;
        }
        setLoading(true);
        const body = new URLSearchParams({
            name,
            email,
            phone,
            description
        })
        body.append('services', JSON.stringify(services))
    
        try {
            const res = await fetch('https://iksinterns.herokuapp.com/api/post', {
                method:'POST',
                mode:"cors",
                body,
                headers: {
                    'Content-Type':'application/x-www-form-urlencoded',
                },
            })
            if(res.status === 201) {
                alert("Success!");
                form.current.reset();
                setLoading(false);
                return;
            }
        }   catch(e) {
            console.log(e)
        }
        alert("failed.. try again!");
        setLoading(false);
    }

    const handleName = (e: any) => {
        if(!e.target.value.length) {
            setNameErr('Please enter your name!');
        } else {
            setNameErr('');
        }
        setName(e.target.value);
    }

    const handleEmail = (e: any) => {
        if(!e.target.value.length) {
            setEmailErr('Please enter your email!');
        } else {
            setEmailErr('');
        }
        setEmail(e.target.value);
    }

    const handlePhone = (e: any) => {
        if(e.target.value.length > 10) {
            setPhoneErr('Phone number cannot exceed 10 digits')
        } else if(!e.target.value.length) {
            setPhoneErr('Please enter your phone number!');
        } 
        else {
            setPhoneErr('');
        }
        setPhone(e.target.value);
    }

    const handleDescription = (e: any) => {
        if(!e.target.value.length) {
            setDescErr('Please enter a description!');
        } else {
            setDescErr('');
        }
        setDescription(e.target.value);
    }

    const handleServices = (val: string) => (e: any) => {
        if((services as Array<String>).includes(val)) {
            const arr = services.filter(el => {
                return el!==val;
            })
            setServices(arr);
        } else {
            setServices([...services, val as never])
        }
    }

    const handleDisabled = () => {
        if(loading || nameErr || emailErr || phoneErr || descErr || !name || !email || !description || !phone) 
            return true;
        else
            return false;
    }

    return(
        <div className='form__encloser'>
            <section>
                <h1>You&apos;ve got questions? We&apos;ve got <span>mento</span>rs!</h1>
                <p>Fill in your queries and get them resolved by our experts.</p>
            </section>
            <main className='form__main'>
                <form name='message' onSubmit={handleSubmit} ref={form}>
                    <div className='form__formField'>
                        <h4>{nameErr}</h4>
                        <label htmlFor='name'>
                            Name
                        </label>
                        <input spellCheck="false" style={{'outlineColor': nameErr ? 'crimson':'black'}} onChange={handleName} id='name' name='name' type="text" placeholder='Your Name'/>
                    </div>
                    <div className='form__formField'>
                        <h4>{emailErr}</h4>
                        <label htmlFor='email'>
                            Email
                        </label>
                        <input spellCheck="false" style={{'outlineColor': emailErr ? 'crimson':'black'}} onChange={handleEmail} id='email' name='email' type="email" placeholder='email@gmail.com'/>
                    </div>
                    <div className='form__formField'>
                        <h4>{phoneErr}</h4>
                        <label htmlFor='phone'>
                            Phone
                        </label>
                     
                        <input spellCheck="false" style={{'outlineColor': phoneErr ? 'crimson':'black'}} onChange={handlePhone} id='phone' name='phone' type="phone" placeholder='+91 7652341568'/>
                    </div>
                    <div className='form__formField'>
                        <h4>{descErr}</h4>
                        <label htmlFor='help'>
                            How can we help?
                        </label>
                       <textarea spellCheck="false" style={{'outlineColor': descErr ? 'crimson':'black'}} onChange={handleDescription} name="help" id="help" rows={5} placeholder='Briefly decribe your query ...'></textarea>
                    </div>
                    <section>
                        <label>Domain</label>
                        <br/>
                        <div className='form__checkboxes'>
                            <div className='form__checkbox'>
                                <label htmlFor='webdesign'>Web Design</label>
                                <input onChange={handleServices('Web Design')} type="checkbox" name="webdesign" id="webdesign"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='contentcreation'>Content Creation</label>
                                <input onChange={handleServices('Content Creation')} type="checkbox" name="contentcreation" id="contentcreation"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='uxdesign'>UX Design</label>
                                <input onChange={handleServices('UX Design')} type="checkbox" name="uxdesign" id="uxdesign"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='strategy'>Strategy and Consulting</label>
                                <input onChange={handleServices('Strategy and Consulting')} type="checkbox" name="strategy" id="strategy"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='research'>User Research</label>
                                <input onChange={handleServices('User Research')} type="checkbox" name="research" id="research"/>
                            </div>
                            <div className='form__checkbox'>
                                <label htmlFor='other'>Other</label>
                                <input onChange={handleServices('Other')} type="checkbox" name="other" id="other"/>
                            </div>
                        </div>
                    </section>
                    <h4><span hidden={!loading}>LOADING...</span></h4>
                    <button disabled={handleDisabled()} type="submit">Send Message</button>
                </form>
            </main>
        </div>
    )
}