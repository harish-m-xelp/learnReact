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
              Singapore and Rumah123.com in Indonesia. The JV will be led by
              99.co’s management team, including co-founder and CEO Darius
              Cheung. 99.co’s last round of funding was a $15.2 million Series
              B, announced in August, that the company says took its valuation
              to over $100 million. In a press statement, Cheung said “We are
              coming for market leadership. This is a key milestone that
              positions us instantly as number one in Indonesia, and well on our
              way to that in Singapore. Our innovative DNA plus REA’s unrivaled
              experience and resources makes this partnership a lethal
              combination Southeast Asia has not seen before.” The company’s
              existing shareholders, including Facebook co-founder Eduardo
              Saverin, Sequoia Capital, MindWorks Ventures, Allianz X, East
              Ventures and 500 Startups, will have a combined stake of 73%, with
              REA Group holding the remaining 27%. Launched in 2014, 99.co was
              created to make real estate listings more navigable for renters
              and buyers in Singapore and other Southeast Asian markets. REA
              Group owns portals in Malaysia, Hong Kong, Indonesia, Singapore
              and China, and a property review site in Thailand. It is also a
              stakeholder in Move, the American real estate site, and Indian
              property portal PropTiger.
            </p>
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
              million) in an IPO on the ASX this month.
            </p>
          </div>
        </div>
      </Media>
    </React.Fragment>
  );
}

export default Newscard;
