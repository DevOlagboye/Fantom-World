import { React } from "react"
import { Tabs } from "antd"
import "./CreatorPage.css"
import Overview from "../Overview/Overview"
import CreatorHomes from "../CreatorHomes/CreatorHomes"
import CreatorLands from "../CreatorLands/CreatorLands"
import CreatorCollection from "../CreatorCollection/CreatorCollection"

const { TabPane } = Tabs
const CreatorPage = () => {
    return (
        <div className="creator-container">
            <div className="creator-nav-menu">
                <Tabs defaultActiveKey="overview" className="creators-tabs">
                    <TabPane tab="Overview" key="overview">
                        <Overview />
                    </TabPane>
                    <TabPane tab="Homes" key="homes">
                        <CreatorHomes />
                    </TabPane>
                    <TabPane tab="Collection" key="collection">
                        <CreatorCollection />
                    </TabPane>
                    <TabPane tab="Lands" key="Land">
                        <CreatorLands />
                    </TabPane>
                </Tabs>
            </div>
        </div>
    )
}

export default CreatorPage
