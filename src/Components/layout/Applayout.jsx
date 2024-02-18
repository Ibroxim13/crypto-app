import { Layout, Spin } from 'antd';
import AppSider from './AppSider'
import AppContent from './AppContent'
import AppHeader from './AppHeader'
import { useContext } from 'react';
import CryptoContext from '../../Context/crypto-context';

export default function Applayout() {
    const { loading } = useContext(CryptoContext)

    if (loading) {
        return <Spin fullscreen />
    }

    return (
        <Layout>
            <AppHeader />
            <Layout>
                <AppSider />
                <AppContent />
            </Layout>
        </Layout>
    )
}
