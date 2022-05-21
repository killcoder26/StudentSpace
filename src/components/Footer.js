import React from 'react';

import {
    MDBFooter,
    MDBContainer    
} from 'mdb-react-ui-kit';

import { SocialIcon } from 'react-social-icons'
import { Typography } from '@mui/material';

function Footer() {
    return (
        <div className='footer'><MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
            <MDBContainer className='pl-20'>

                <section>
                    <div className='iconbutton'>

                        <SocialIcon url="https://facebook.com" target="_blank" network="facebook" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://instagram.com" target="_blank" network="instagram" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="mailto:sunandita.mody16@gmail.com" target="_blank" network="email" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://www.linkedin.com/in/sunandita-mody-93803520a/" target="_blank" style={{ height: 35, width: 35 }} />
                        <SocialIcon url="https://github.com/Sunanditamody" network="github" target="_blank" style={{ height: 35, width: 35 }} />

                    </div>
                </section>
            </MDBContainer>

            <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', textAlign: 'center' }}>
                <Typography sx={{ color: '#11226b' }}>
                    © 2022 Developed by: Sunandita Mody
                </Typography>
            </div>
        </MDBFooter></div>
    )
}

export default Footer