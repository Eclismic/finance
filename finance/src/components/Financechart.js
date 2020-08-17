import React, {useState} from 'react'
//

import { Chart } from 'react-charts'

export default function Financechart(props) {

    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: props.data
            }
        ],
        []
    )

    const series = () => {
        console.log(data)
    }

    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time',
            time: {
                displayFormats: {
                    hour: 'H'
                }},position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    return (
        <div style={{ width: '400px', height: '400px' }}>
            <Chart data={data} axes={axes} tooltip />
            <button onClick={series}>klik</button>
        </div>
    )
}