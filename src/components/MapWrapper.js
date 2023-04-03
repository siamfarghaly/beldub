import loadable from '@loadable/component';
import React from 'react';

export default function MapWrapper() {
    const Map = loadable(() => import("./Map"))
    return <div>
        <Map />
    </div>
}