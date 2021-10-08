import React from 'react'
import Img1 from '../static/images/bonus_sms.png'
import Img2 from '../static/images/bonus_promote.png'
import Img3 from '../static/images/bonus_affilate.png'

const Bonuses = () => {
    return (
        <div class="bonuses_div">
            <h3>Gifts and Bonuses</h3>
            <p>Welcome to Crazy Cash! We bring new opportunities to everyone. Regardless whether you are a viewer or
                streamer, there is always a way to make money or get a bonus. Choose the option that suites you the best and
                start earning!</p>
            <div class="star_head">
                <i class="fas fa-star"></i>
                <h4>Get a welcome bonus to your account by receiving SMS</h4>
            </div>
            <p>Confirm your mobile number and instantly receive a bonus on your balance. The bonus can be used to create a
                challenge for any streamer on the platform. This is the most easy way to start getting fun!</p>
            <div>
                <img src={`${Img1}`} />
                <button>Get Bonus</button>
            </div>
            <div class="star_head">
                <i class="fas fa-star"></i>
                <h4>Help us grow</h4>
            </div>
            <p>Create a post in the feed, tell your friends on Instragram or any social network, post a tweet or invite a
                famous blogger to the platform. Take absolutely any useful action and get money for each of them!</p>
            <p><a href="#">Learn more about best ways to help Crazy! Cash</a></p>
            <div>
                <img src={`${Img2}`} />
                <button>Get Bonus</button>
            </div>
            <div class="star_head">
                <i class="fas fa-star"></i>
                <h4>Participate in affiliate program</h4>
            </div>
            <p>Generous royalties with instant withdrawal and VIP program for serious affiliates</p>
            <div>
                <img src={`${Img3}`} />
                <button>Get Bonus</button>
            </div>
        </div>
    )
}

export default Bonuses
