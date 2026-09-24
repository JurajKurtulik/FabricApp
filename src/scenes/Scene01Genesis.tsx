import { Product } from "../visuals/Product";
export default function Scene01Genesis() {
  return (
    <>
      <div className="opening-copy">
        <div className="eyebrow">
          MICROSOFT FABRIC / OPERATIONAL APPLICATIONS
        </div>
        <h1>
          FROM INSIGHT
          <br />
          TO <em>ACTION</em>
        </h1>
        <p>
          Building operational applications with
          <br />
          Microsoft Fabric Apps &amp; Rayfin
        </p>
        <small>An early-stage partner walkthrough · 30 minutes</small>
      </div>
      <div className="genesis-logo">
        <Product name="fabric" size={310} />
        <span>Microsoft Fabric</span>
      </div>
      <div className="burst" aria-hidden="true" />
      <div className="shockwave" aria-hidden="true" />
    </>
  );
}
