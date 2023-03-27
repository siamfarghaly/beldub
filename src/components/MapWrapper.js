import loadable from '@loadable/component';
import React from 'react';
// import Map from './Map'; // uncomment this line to see the Gatsby build error

export default function MapWrapper() {
    const Map = loadable(() => import("./Map")) // comment this line to see the Gatsby build error
    return <div>
        <Map />
    </div>
}