import React from "react";
import FooterContent from "@skatteetaten/frontend-components/FooterContent";
import Grid from "@skatteetaten/frontend-components/Grid";

import * as styles from "./footer.module.css";

const FooterLink = ({ to, name }: any) => (
  <a
    href={to}
    target="blank"
    className={styles.footerLink}
    style={{ margin: "10px 0" }}
  >
    {name}
  </a>
);

const FooterLinks = () => (
  <div className={styles.footerLinks}>
    <div>
      <FooterLink to="https://www.skatteetaten.no" name="skatteetaten.no" />
    </div>
  </div>
);

export default () => (
  <FooterContent>
    <Grid>
      <Grid.Row>
        <Grid.Col sm={12} lg={12} xl={2}>
          <FooterContent.Logo />
        </Grid.Col>
        <Grid.Col sm={12} lg={12} xl={4}>
          <FooterLinks />
        </Grid.Col>
      </Grid.Row>
    </Grid>
  </FooterContent>
);
