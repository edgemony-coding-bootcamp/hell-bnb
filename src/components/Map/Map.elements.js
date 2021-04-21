import styled from "styled-components";
import { Map } from "google-maps-react";
import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const GoogleMap = styled(Map)`
  width: 100%;
  height: 100%;
`;

export const SectionContainer = styled.section`
  width: 100%;
  padding: 32px 24px;

  @media ${device.deviceM} {
    padding: 0 40px;
  }

  @media ${device.deviceXL} {
    padding: 0 80px;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 32px;
  border-top: 1px solid ${colors.borderColor};
  border-bottom: 1px solid ${colors.borderColor};

  @media ${device.deviceM} {
    padding-bottom: 48px;
  }
`;

export const SectionHeader = styled.h2`
  font-family: "Helvetica";
  padding-top: 32px;
  font-size: 22px;

  @media ${device.deviceM} {
    padding-top: 48px;
  }
`;

export const MapWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 280px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${colors.borderColor};

  @media ${device.deviceM} {
    height: 480px;
    position: relative;
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: calc(100% - 62px);
  position: relative;

  @media ${device.deviceM} {
    height: 100%;
  }
`;

export const MapWindowInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 62px;
  border-top: 1px solid ${colors.borderColor};
  padding: 12px 16px;

  @media ${device.deviceM} {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 24px;
    background-color: white;
    border-radius: 10px;
    width: unset;
  }
`;

export const InfoHeader = styled.h5`
  font-family: "Helvetica";
  font-size: 12px;
  margin: 0;
  font-weight: bold;
`;

export const InfoDesc = styled.p`
  font-family: "Helvetica";
  font-size: 11px;
  color: ${colors.lightText};
`;

export const ActivityDescription = styled.p`
  font-family: "Helvetica";
  font-size: 16px;
  margin-top: 24px;
  line-height: 26px;
  color: ${colors.darkText};
`;
