import styled from "styled-components";
import { Map } from "google-maps-react";
// import device from "../../assets/breakpoints";
import colors from "../../assets/colors";

export const GoogleMap = styled(Map)`
  width: 100%;
  height: 100%;
`;

export const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 24px;
`;

export const SectionHeader = styled.h2`
  border-top: 1px solid ${colors.borderColor};
  padding-top: 32px;
`;

export const MapWindow = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 280px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid ${colors.borderColor};
`;

export const MapContainer = styled.div`
  width: 100%;
  height: calc(100% - 62px);
  position: relative;
`;

export const MapWindowInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  height: 62px;
  border-top: 1px solid ${colors.borderColor};
  padding: 12px 16px;
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
