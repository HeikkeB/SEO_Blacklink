import React from 'react'
import { Link } from 'react-router-dom'
import './LinkPyromids.css'
import pyromids_shield from '../../images/pyromids_shield.svg'
import social_img from '../../images/Dashboard social media & people.png'

export default function LinkPyromids() {
  return (
    <div className='linkPyromids'>
        <div className='linkPyromids-texting'>
            <img className='linkPyromids__shield' src={pyromids_shield} alt='shield'/>
            <h2 className='linkPyromids__title'>Link pyromids robust and reliable</h2>
            <p className='linkPyromids__text'>Porta etiam dolor sit amet, consectetur adipiscing elit.</p>
            <p className='linkPyromids__text'>Consequat eu congue morbi sem augue amet. Id imperdiet diam quis tempor rhoncus, ipsum placerat aliquam massa. 
                Luctus porttitor massa amet nunc, sollicitudin.
                Erat amet faucibus adipiscing ut sed massa convallis vitae.</p>
                <p className='linkPyromids__text'>
                Eu sit placerat nunc adipiscing. Laoreet amet commodo nunc, morbi urna ornare.
                Leo laoreet dignissim massa elementum nullam sem pellentesque feugiat in.
                </p>
            <p className='linkPyromids__text'>Lectus dolor pharetra tortor viverra netus eget mi in in.
                Quis consequat velit a vestibulum. Porta etiam odio sit at.
                At adipiscing posuere rhoncus non vivamus lobortis sed.
                </p>
            <Link className='linkPyromids__link' to='/'>Learn More About our Process →</Link>
        </div>
            <img className='linkPyromids_social-img' src={social_img} alt='social img' />
    </div>
  )
}
