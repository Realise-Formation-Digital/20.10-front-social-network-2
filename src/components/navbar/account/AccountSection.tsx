import './AccountSection.css';

import IconButton from '../../iconButton/IconButton';
import PersonOutline from "@material-ui/icons/PersonOutline"
import Button from '../../button/Button';


export default function AccountSection() {
    return <div id="account-section">
        <Button secondary label="Log In"/>
        <Button label="Sign Up"/>
        <IconButton Icon={PersonOutline}/>
    </div>
}