import React, { Suspense, Fragment } from 'react'
import { useRoutes } from 'react-router-dom'
import TopBarProgress from 'react-topbar-progress-indicator'
import * as Sentry from '@sentry/react'
import './App.less'
import 'emoji-mart/css/emoji-mart.css'

import { PRIMARY_COLOR } from '@constants'
import { designRoutes, appRoutes } from '@routes'

TopBarProgress.config({
    barColors: {
        0: PRIMARY_COLOR,
        0.5: PRIMARY_COLOR,
        '1.0': PRIMARY_COLOR,
    },
    shadowBlur: 5,
})

function App() {
    // console.log(process.env.REACT_APP_TARGET_ENV)
    // console.info(process.env.REACT_APP_TARGET_ENV)
    // console.warn(process.env.REACT_APP_TARGET_ENV)
    // console.error(process.env.REACT_APP_TARGET_ENV)

    // We removed the <BrowserRouter> element from App because the
    // useRoutes hook needs to be in the context of a <BrowserRouter>
    // element. This is a common pattern with React Router apps that
    // are rendered in different environments. To render an <App>,
    // you'll need to wrap it in your own <BrowserRouter> element.
    let element = useRoutes(
        process.env.REACT_APP_TARGET_ENV === 'design' ? designRoutes : appRoutes
    )

    return (
        <Fragment>
            <Suspense
                fallback={
                    <div>
                        <TopBarProgress
                            config={{
                                barColors: {
                                    0: PRIMARY_COLOR,
                                    0.5: PRIMARY_COLOR,
                                    '1.0': PRIMARY_COLOR,
                                },
                                shadowBlur: 5,
                            }}
                        />
                    </div>
                }
            >
                {element}
            </Suspense>
        </Fragment>
    )
}

export default Sentry.withProfiler(App, { name: 'CustomAppName' })
