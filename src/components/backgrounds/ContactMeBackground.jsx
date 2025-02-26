import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const ContactMeBackground = () => {

    return (
        <div>
            <div id='sky' className='absolute'></div>
            <div id='lightning' className='absolute lightning flashit'></div>
            <div id='background' className='absolute h-screen w-screen'></div>
        </div>
    );
};

export default ContactMeBackground;