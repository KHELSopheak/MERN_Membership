import { MdGroups } from 'react-icons/md';
import { MdAdminPanelSettings } from 'react-icons/md';

const links = [
  {
    text: 'Group member',
    path: '.',
    icon: <MdGroups />,
  },
  {
    text: 'admin',
    path: 'admin',
    icon: <MdAdminPanelSettings />,
  },
];

export default links;
