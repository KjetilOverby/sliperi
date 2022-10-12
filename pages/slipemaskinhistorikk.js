import React from 'react'
import PageLayoutSidebar from '../src/components/common/PagelayoutSidebar'
import SideBar from '../src/components/common/Sidebar'
import SlipemaskinMainPage from '../src/components/slipemaskin/SlipemaskinMainPage'


const slipemaskinhistorikk = () => {
return (
<>
<PageLayoutSidebar>
    <SideBar />
<SlipemaskinMainPage />
</PageLayoutSidebar>
<style jsx>{`
.container {
}
`}
</style>
</>
)
}

export default slipemaskinhistorikk