import { Flex, Typography } from 'antd'
import React from 'react'

export default function CoinInfo({coin ,withSymbol}) {
    return (
        <Flex align='center'>
            <img src={coin.icon}
                alt={coin.name}
                style={{ width: 40 }} />
            <Typography.Title
                style={{ margin: 0, marginLeft: 10 }}
                level={2}> {withSymbol && <span>({coin.symbol})</span>}  {coin.name}
            </Typography.Title>
        </Flex>
    )
}
