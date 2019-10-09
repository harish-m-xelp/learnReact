import React from "react";
import Media from "react-media";
import styles from "./newCard.module.css";

function Newscard() {
  return (
    <React.Fragment>
      <Media query="(max-width:800px)">
        <div className={styles.container}>
          <img
            className={styles.image}
            src="https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-1059655038.jpg?w=600"
          />
          <div className={styles.header}>
            <h1>Southeast Asian real estate portal 99.co</h1>

            <p>
              Southeast Asian real estate portal 99.co has agreed to form a
              joint venture with iProperty. As part of the deal, iProperty owner
              REA Group will invest $8 million of working capital into the
              venture, expected to be finalized by the second quarter of 2020.
              99.co and REA Group, a real estate-focused digital advertising
              conglomerate that is listed on the Australian Securities Exchange
              (ASX), say that the JV immediately makes 99.co the market leader
              in Indonesia and positions it to take the top spot in Singapore,
              as well. The deal also makes 99.co a more formidable rival to
              PropertyGuru. Backed by TPG Capital and KKR, PropertyGuru is
              expected to raise up to AUD $380.2 million (about USD $255.9
              million) in an IPO on the ASX this month. The joint venture is
              expected to be finalized by the second quarter of 2020 and 99.co
              will assume full control of REA Group brands iProperty.com.sg in
              Singapore and Rumah123.com in Indonesia.
            </p>
            <div className={styles.author}>---By Haarry</div>
          </div>
        </div>
      </Media>
      <Media query="(min-width:1024px)">
        <div className={styles.deskContainer}>
          <img
            className={styles.deskimage}
            src="https://techcrunch.com/wp-content/uploads/2019/10/GettyImages-1059655038.jpg?w=600"
          />
          <div className={styles.header}>
            <h2>Southeast Asian real estate portal 99.co</h2>

            <p>
              Southeast Asian real estate portal 99.co has agreed to form a
              joint venture with iProperty. As part of the deal, iProperty owner
              REA Group will invest $8 million of working capital into the
              venture, expected to be finalized by the second quarter of 2020.
              99.co and REA Group, a real estate-focused digital advertising
              conglomerate that is listed on the Australian Securities Exchange
              (ASX), say that the JV immediately makes 99.co the market leader
              in Indonesia and positions it to take the top spot in Singapore,
              as well. The deal also makes 99.co a more formidable rival to
              PropertyGuru. Backed by TPG Capital and KKR, PropertyGuru is
              expected to raise up to AUD $380.2 million (about USD $255.9
              million) in an IPO on the ASX this month.
            </p>
            <div className={styles.author}>---By Haarry</div>
          </div>
        </div>
      </Media>
    </React.Fragment>
  );
}

export default Newscard;
