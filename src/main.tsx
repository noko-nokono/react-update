import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App'
import { Mock } from '@/components/common/Mock'
import { Layout } from '@/components/common/Layout'
import { ReactUpdate } from '@/page/react-update'
import { Version19 } from '@/page/react-update/version19'
import { ServerComponent } from '@/page/react-update/server-component'
import { Blog } from '@/page/blog'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Mock>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<App />} />
            
            {/* React Update */}
            <Route path='react-update' element={<ReactUpdate />} />
            <Route path='react-update/version-19' element={<Version19 />} />
            <Route path='react-update/server-component' element={<ServerComponent />} />

            {/* Blog */}
            <Route path='blog' element={<Blog />} />
          </Route>
        </Routes>
      </Mock>
    </BrowserRouter>  
  </StrictMode>,
)
