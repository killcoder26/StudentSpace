import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import CampaignIcon from '@mui/icons-material/Campaign';

export const Sidebar = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Student Details',
    path: '/Crud',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Add Students',
    path: '/Add',
    icon: <AiIcons.AiOutlineUserAdd/>,
    cName: 'nav-text'
  },
  {
    title: 'Personalized',
    path: '/Info',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Posts',
    path: '/message',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Annoucements',
    path: '/announce',
    icon: <CampaignIcon style={{color:"white"}}/>,
    cName: 'nav-text'
  }
];