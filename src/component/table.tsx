import styled from "styled-components";
const StyleTh = styled.th<{
    width?: string;
    height?: string;
    padding?: string;
    bacc?: string;
}>`
    width: ${({ width }) => width || "10px"};
    height: ${({ height }) => height || "auto"};
    border: 1px solid #000000;
    text-align: center;
    color: white;
    background: ${({ bacc }) => bacc || "white"};
    padding: ${({ padding }) => padding || "30px 5px"};
`
const StyleThWithBagImg = styled.th<{
    width?: string;
    height?: string;
    padding?: string;
    bacc?: string;
}>`
    width: ${({ width }) => width || "10px"};
    height: ${({ height }) => height || "auto"};
    border: 1px solid #000000;
    text-align: center;
    color: white;
    background: ${({ bacc }) => bacc || "white"};
    padding: ${({ padding }) => padding || "30px 5px"};
    background-image: url("../../imgs/bg.png");
    background-size: cover;
`



const StyleTd = styled.td<{
    width?: string;
    height?: string;
    color?: string;
    bacc?: string;
    fontSize?: string;
}>`
    position: relative;
    font-size: ${({ fontSize }) => fontSize || ""};
    background-color: ${({ bacc }) => bacc || "white"};
    color: ${({ color }) => color || "black"};
    width: ${({ width }) => width || "100px"};
    height: ${({ height }) => height || "10px"};
    text-align: center;
    vertical-align: middle;
    border: 1px solid #000000;
    
`

const MyImg = styled.img<{
    width?: string;
    height?: string;
}>`
    width: ${({ width }) => width || "100px"} ;
    height: ${({ height }) => height || "140px"};
`

const TitleSpan = styled.span`
    border:1px white solid;
    border-radius:15px;
    padding:2px 3px;
    font-size:10px;
    margin:0 5px;
`
const StyledSpan = styled.span`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(20%, -40%);
    font-size: 13px;
`;

const Table = () => {
    // bacc
    const gradient1 = "linear-gradient(to bottom, rgb(174, 229, 255) , #1c9dd8 )"
    const gradient2 = "linear-gradient(to bottom, #57aaf8 , #156ab8 )"
    const gradient3 = "linear-gradient(to bottom, #59ebf8 , #29949e )"
    const typeColor = "#f8edf5"
    const cleanColor = "#f9eddd"
    const comfortableColor = "#e5eef5"
    const saveColor = "#c8e7e1"
    const convinceColor = "#e8f2d0"
    const toiletColor = "#efefef"

    // style
    const titlePadding = "10px 0"
    const cleanPointColor = "#cc912e"
    const comfortablePointColor = "#2b8faa"
    const savePointColor = "#249a8c"
    const convincePointColor = "#43b156"
    const protectionPointColor = "#96c513"
    const toiletPointColor = "#a0a0a0"
    const pointSize = "22px"
    const colSpan2 = 2

    const imageNames = [
        "DL-ACR510TWS.png",
        "DL-ACR200TWS.png",
        "DL-RRTK50TWW.png",
        "DL-RQTK30TWW.png",
        "DL-PRTK20tws.png",
        "10TWS.png",
        "10TWW.png",
        "09tww.png",
        "25TWS.png",
        "610RTWS.png"
    ];

    const generatePoints = (count: number, bacc: string, content: string, fontSize?: string, color?: string, spanContent?: string) => {
        return [...Array(count)].map((_, index) => (
            <StyleTd bacc={bacc} key={index} color={color} fontSize={fontSize}>{content}<StyledSpan>{spanContent}</StyledSpan></StyleTd>
        ));
    };

    return (<>
        <table style={{ width: "100%", borderCollapse: "collapse", }}>
            {/* 機種 */}
            <tr>
                <StyleTh bacc="#b6b6b6" rowSpan={2}>機種</StyleTh>
                <StyleThWithBagImg bacc="" width="100px" rowSpan={2} colSpan={colSpan2}></StyleThWithBagImg>
                <StyleTh bacc={gradient1} padding={titlePadding} colSpan={2}>泡沫潔淨系列<TitleSpan>順熱式</TitleSpan></StyleTh>
                <StyleTh bacc={gradient2} padding={titlePadding} colSpan={6}>纖薄美型系列<TitleSpan>順熱式</TitleSpan></StyleTh>
                <StyleTh bacc={gradient3} padding={titlePadding} colSpan={2}>基礎潔淨系列<TitleSpan>儲熱式</TitleSpan></StyleTh>
            </tr>
            <tr>
                {imageNames.map((imageName, index) => (
                    <StyleTd key={index} width="100px">
                        <MyImg src={`../../imgs/${imageName}`} alt="" />
                    </StyleTd>
                ))}
            </tr>
            {/* 型式 */}
            <tr>
                <StyleTh padding="0 5px" bacc="#eb919a" colSpan={1}>型式</StyleTh>
                <StyleTd bacc={typeColor} colSpan={colSpan2}>固定版(長短可調整)</StyleTd>
                {generatePoints(2, typeColor, "●", pointSize, "#c1598c")}
                {generatePoints(6, typeColor, "●", pointSize, "#c1598c", "(新型)")}
                {generatePoints(2, typeColor, "●", pointSize, "#c1598c")}
            </tr>
            {/* 乾淨 */}
            <tr>
                <StyleTh bacc="#53c3f1" rowSpan={6}>乾淨</StyleTh>
            </tr>
            <tr>
                <StyleTd bacc={cleanColor} colSpan={colSpan2}>不鏽鋼噴嘴</StyleTd>
                {[...Array(10)].map((_, index) => (
                    <StyleTd bacc={cleanColor} key={index}>一體成形</StyleTd>
                ))}
            </tr>
            <tr>
                <StyleTd bacc={cleanColor} colSpan={colSpan2}>噴嘴自體清淨</StyleTd>
                {generatePoints(8, cleanColor, "3回")}
                {generatePoints(2, cleanColor, "2回")}
            </tr>
            <tr>
                <StyleTd bacc={cleanColor} colSpan={colSpan2}>噴嘴溫水清洗 抑菌99%</StyleTd>
                {generatePoints(10, cleanColor, "●", pointSize, cleanPointColor)}
            </tr>
            <tr>
                <StyleTd bacc={cleanColor} rowSpan={2}>便座抑菌</StyleTd>
                <StyleTd bacc={cleanColor}>SIAA/Ag<sup>+</sup></StyleTd>
                {generatePoints(10, cleanColor, "●", pointSize, cleanPointColor)}
            </tr>
            <tr>
                <StyleTd bacc={cleanColor}>SGS</StyleTd>
                {generatePoints(10, cleanColor, "●", pointSize, cleanPointColor)}
            </tr>
            {/* 舒適 */}
            <tr>
                <StyleTh bacc="#85d0cc" rowSpan={13}>舒適</StyleTh>
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor} rowSpan={7}>洗淨機能</StyleTd>
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>脈衝式水珠</StyleTd>
                {generatePoints(10, comfortableColor, "●", pointSize, comfortablePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>移動洗淨</StyleTd>
                {generatePoints(10, comfortableColor, "●", pointSize, comfortablePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>按摩洗淨</StyleTd>
                {generatePoints(4, comfortableColor, "●", pointSize, comfortablePointColor)}
                {generatePoints(2, comfortableColor, "", pointSize, comfortablePointColor)}
                {generatePoints(1, comfortableColor, "●", pointSize, comfortablePointColor)}
                {generatePoints(1, comfortableColor, "", pointSize, comfortablePointColor)}
                {generatePoints(1, comfortableColor, "●", pointSize, comfortablePointColor)}
                {generatePoints(1, comfortableColor, "", pointSize, comfortablePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>寬幅洗淨</StyleTd>
                {generatePoints(4, comfortableColor, "●", pointSize, comfortablePointColor)}
                {generatePoints(2, comfortableColor, "", pointSize, comfortablePointColor)}
                {generatePoints(1, comfortableColor, "●", pointSize, comfortablePointColor)}
                {generatePoints(3, comfortableColor, "", pointSize, comfortablePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>水流強弱</StyleTd>
                {generatePoints(6, comfortableColor, "5段")}
                {generatePoints(4, comfortableColor, "3段")}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>洗淨位置</StyleTd>
                {generatePoints(6, comfortableColor, "5段")}
                {generatePoints(4, comfortableColor, "")}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor} rowSpan={3}>溫度控制</StyleTd>
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>水溫</StyleTd>
                {generatePoints(10, comfortableColor, "3段")}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor}>便座</StyleTd>
                {generatePoints(10, comfortableColor, "3段")}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor} colSpan={colSpan2}>除臭</StyleTd>
                {generatePoints(5, comfortableColor, "●", pointSize, comfortablePointColor)}
                {generatePoints(5, comfortableColor, "", pointSize, comfortablePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={comfortableColor} colSpan={colSpan2}>烘乾</StyleTd>
                {generatePoints(1, comfortableColor, "32/36/40/44/48°C", "12px")}
                {generatePoints(1, comfortableColor, "")}
                {generatePoints(2, comfortableColor, "快速烘乾(五段溫度)*³", "12px")}
                {generatePoints(4, comfortableColor, "")}
                {generatePoints(1, comfortableColor, "32/40/48°C")}
                {generatePoints(1, comfortableColor, "")}
            </tr>
            {/* 節能 */}
            <tr>
                <StyleTh padding="0" bacc="#6dba5a" rowSpan={3}>節能</StyleTh>
            </tr>
            <tr>
                <StyleTd bacc={saveColor} colSpan={2}>自動節電</StyleTd>
                <StyleTd bacc={saveColor} ><MyImg height="20px" src="../../imgs/E.png" alt="" /></StyleTd>
                {generatePoints(1, saveColor, "●", pointSize, savePointColor)}
                <StyleTd bacc={saveColor} ><MyImg height="20px" src="../../imgs/E.png" alt="" /></StyleTd>
                {generatePoints(7, saveColor, "●", pointSize, savePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={saveColor} colSpan={2}>8hr節電</StyleTd>
                {generatePoints(2, saveColor, "●", pointSize, savePointColor)}
                {generatePoints(4, saveColor, "", pointSize, savePointColor)}
                {generatePoints(1, saveColor, "●", pointSize, savePointColor)}
                {generatePoints(1, saveColor, "", pointSize, savePointColor)}
                {generatePoints(2, saveColor, "●", pointSize, savePointColor)}
            </tr>
            {/* 便利 */}
            <tr>
                <StyleTh bacc="#fbc384" rowSpan={9}>便利</StyleTh>
            </tr>
            <tr>
                <StyleTd colSpan={2} bacc={convinceColor} >著座感應(壓力式<span style={{ alignItems: "center", color: "#a89090", fontSize: "12px" }}>*1</span>)</StyleTd>
                {generatePoints(10, convinceColor, "●", pointSize, convincePointColor)}
            </tr>
            <tr>
                <StyleTd colSpan={2} bacc={convinceColor} >遙控器</StyleTd>
                {generatePoints(2, convinceColor, "●", pointSize, convincePointColor)}
                {generatePoints(4, convinceColor, "●", pointSize, convincePointColor, "(磁吸式)")}
                {generatePoints(4, convinceColor, "", pointSize, convincePointColor)}
            </tr>
            <tr>
                <StyleTd colSpan={2} bacc={convinceColor} >用戶設定</StyleTd>
                {generatePoints(2, convinceColor, "", pointSize, convincePointColor,)}
                {generatePoints(1, convinceColor, "●", pointSize, convincePointColor, "(4組)")}
                {generatePoints(7, convinceColor, "", pointSize, convincePointColor,)}
            </tr>
            <tr>
                <StyleTd colSpan={2} bacc={convinceColor} >柔光照明</StyleTd>
                {generatePoints(1, convinceColor, "●", pointSize, convincePointColor,)}
                {generatePoints(1, convinceColor, "", pointSize, convincePointColor,)}
                {generatePoints(1, convinceColor, "●", pointSize, convincePointColor,)}
                {generatePoints(7, convinceColor, "", pointSize, convincePointColor,)}
            </tr>
            <tr>
                <StyleTd colSpan={2} bacc={convinceColor} >自動開/關蓋</StyleTd>
                {generatePoints(10, convinceColor, "●", pointSize, convincePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={convinceColor} rowSpan={3} >便座快適拆卸</StyleTd>
            </tr>
            <tr>
                <StyleTd bacc={convinceColor} >便蓋</StyleTd>
                {generatePoints(10, convinceColor, "●", pointSize, convincePointColor)}
            </tr>
            <tr>
                <StyleTd bacc={convinceColor} >便座</StyleTd>
                {generatePoints(10, convinceColor, "●", pointSize, convincePointColor)}
            </tr>
            {/* 安全 */}
            <tr>
                <StyleTh padding="0" bacc="#abcd43" >安全</StyleTh>
                <StyleTd bacc={convinceColor} colSpan={colSpan2}>漏電保護檢測</StyleTd>
                {generatePoints(10, convinceColor, "●", pointSize, protectionPointColor)}
            </tr>
            <tr>
                <StyleTh padding="0" bacc="#a0a0a0" rowSpan={3}>適配馬桶</StyleTh>
            </tr>
            <tr>
                <StyleTd bacc={toiletColor} colSpan={colSpan2}>單體式馬桶[水電隱藏](KN)</StyleTd>
                {generatePoints(2, toiletColor, "●", pointSize, toiletPointColor)}
                {generatePoints(6, toiletColor, "", pointSize, toiletPointColor)}
                {generatePoints(2, toiletColor, "●", pointSize, toiletPointColor)}
            </tr>
            <tr>
                <StyleTd bacc={toiletColor} colSpan={colSpan2}>單體式馬桶(GN)</StyleTd>
                {generatePoints(10, toiletColor, "●", pointSize, toiletPointColor)}
            </tr>
        </table>
        <div style={{
            display: "flex",
            justifyContent: "space-between", /* 將兩個 div 分散對齊 */
            alignItems: "center",
            fontSize: "10px",
            color: "#5f5e5f",
            padding: "0",
        }}>
            <div style={{ display: "flex" }}>
                <p>*1：便座未著座時，無法使用烘乾和除臭功能。</p>
                <p>*2：販促機種僅販促期間販售，詳細販促期間依本公司之公告為主。</p>
            </div>
            <div style={{ display: "flex" }}>
                <div>*3：</div>
                <div>
                    快速烘乾五段溫度：
                    〔第一段〕上風道約35℃/下風道約38℃
                    〔第二段〕上風道約37.5℃/下風道約40.5℃
                    〔第三段〕上風道約40℃/下風道約43℃
                    〔第四段〕上風道約42.5℃/下風道約
                    <br />
                    45.5℃ 〔第五段〕上風道約45℃/下風道約48℃。
                    ●所有商品圖外觀、顏色僅供參考，請以實物維準
                </div>
            </div>
        </div>
    </>)
}

export default Table;