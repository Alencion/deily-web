import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import '@/index.css'
import reportWebVitals from '@/reportWebVitals'
import { TabPages } from '@pages/.'
import TimelineTabPage from '@pages/TimelineTabPage'
import RootProvider from '@providers/.'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <React.StrictMode>
    <RootProvider>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TabPages />}>
          <Route path='/profile' />
          <Route path='/social' />
          <Route path='/timeline' element={<TimelineTabPage />}/>
          <Route path='/calendar' />
        </Route>
      </Routes>
    </BrowserRouter>
    </RootProvider>

  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
