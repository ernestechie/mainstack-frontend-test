import { AiOutlineVideoCameraAdd, AiOutlineYoutube } from 'react-icons/ai';
import { IoDocumentAttachSharp, IoPencilOutline } from 'react-icons/io5';
import {
  MdOutlineAlarm,
  MdOutlineDashboard,
  MdOutlineDelete,
  MdOutlinePeopleOutline,
} from 'react-icons/md';
import { RiHourglassLine } from 'react-icons/ri';

export const links = [
  {
    name: '',
    children: [
      {
        name: 'dashboard',
        page: '/',
        icon: <MdOutlineDashboard />,
      },
      {
        name: 'item 1',
        page: '/item-1',
        icon: <IoPencilOutline />,
      },
      {
        name: 'item 2',
        page: '/item-2',
        icon: <MdOutlinePeopleOutline />,
      },
      {
        name: 'item 3',
        page: '/item-3',
        icon: <RiHourglassLine />,
      },
    ],
  },
  {
    name: 'OTHER 1',
    children: [
      {
        name: 'item 4',
        page: '/item-4',
        icon: <AiOutlineVideoCameraAdd />,
      },
      {
        name: 'item 5',
        page: '/item-5',
        icon: <MdOutlineDelete />,
      },
    ],
  },
  {
    name: 'OTHER 2',
    children: [
      {
        name: 'item 6',
        page: '/item-6',
        icon: <AiOutlineYoutube />,
      },
      {
        name: 'item 7',
        page: '/item-7',
        icon: <IoDocumentAttachSharp />,
      },
      {
        name: 'item 8',
        page: '/item-8',
        icon: <MdOutlineAlarm />,
      },
    ],
  },
];
