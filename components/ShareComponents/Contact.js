import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import TwitterIcon from '@material-ui/icons/Twitter';
import emailjs from 'emailjs-com';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        console.log(e.target);
        emailjs.sendForm('service_id', 'template_id', e.target, 'user_id').then(
            (result) => {
                if (result) {
                    alert('✅Your message has been sent successfully✅');
                    document.getElementById("form2").reset();
                }
                console.log(result.text);
            },
            (error) => {
                if (error) {
                    alert('⚠Sorry, your message could not be sent. Please try again🔄');
                }
                console.log(error.text);
            }
        );
    };

    const isJustMob = useMediaQuery({
        query: '(min-device-width: 700px)'
    })
    return (
        <section id="contact-area">
            <div className="container-xl">
                <div className="row contact-content-area">
                    <div className="col-md-8 form-content-area">
                        <h3 className="form-title">Send us a Message</h3>
                        <div className="row contact-form">
                            <div className="col-sm p-0 pr-2"><input type="text" placeholder="Your Name *" /></div>
                            <div className="col-sm p-0 pl-2"><input type="text" placeholder="Your Name *" /></div>
                            <textarea className="mt-3" name="message" placeholder="Write Your Message *"></textarea>
                            <button type="submit" className="contact-submitBtn mt-5">Send Message</button>
                        </div>
                    </div>
                    <div className="col-md-4 cntInfo-content p-5">
                        <h4 id="cntInfo_title">Contact<br />INformation</h4>
                        <div className="pt-5">
                            <h6 className="footer-link pb-1">HOLDING 7-8, AMINA GREEN</h6>
                            <h6 className="footer-link pb-1">PARK, Banasree Main Rd1212,</h6>
                            <h6 className="footer-link pb-1">Dhaka</h6>
                            <h6 className="footer-link pb-1">https://stacksolution.dev</h6>
                            <h6 className="footer-link pb-1">support@stacklearner.com</h6>
                            <h6 className="footer-link pb-1">+8801714137780</h6>

                            <div className="pt-5 pb-5">
                                <Link href="/"><a className="m-2"><FacebookIcon /></a></Link>
                                <Link href="/"><a className="m-2"><SubscriptionsIcon /></a></Link>
                                <Link href="/"><a className="m-2"><LinkedInIcon /></a></Link>
                                <Link href="/"><a className="m-2"><TwitterIcon /></a></Link>
                                <Link href="/"><a className="m-2"><InstagramIcon /></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;