import { useSelector } from 'react-redux';

const Header = () => {
    const total = useSelector(store => store.total);

    return <header className='App-header'>
            <h1 className='App-title'>Prime Pizza</h1><span>Total: ${total}</span>
        </header>
}

export default Header;