import React from "react";
import { useTranslation } from "react-i18next";

const InvestmentSubsidyTable = () => {
  const { t } = useTranslation();

  const subsidyData = [
    {
      slNo: 1,
      purpose: t("filmPolicy.ist_purpose1"),
      minInvestment: "200",
      subsidyPercent: "25%",
      maxSubsidy: "150",
    },
    {
      slNo: 2,
      purpose: t("filmPolicy.ist_purpose2"),
      minInvestment: "100",
      subsidyPercent: "25%",
      maxSubsidy: "100",
    },
    {
      slNo: 3,
      purpose: t("filmPolicy.ist_purpose3"),
      minInvestment: "50",
      subsidyPercent: "25%",
      maxSubsidy: "25",
    },
    {
      slNo: 4,
      purpose: t("filmPolicy.ist_purpose4"),
      minInvestment: "50",
      subsidyPercent: "25%",
      maxSubsidy: "25",
    },
  ];

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">{t("filmPolicy.ist_col_slno")}</th>
            <th className="p-3 border">{t("filmPolicy.ist_col_scheme")}</th>
            <th className="p-3 border">{t("filmPolicy.ist_col_min_cost")}</th>
            <th className="p-3 border">
              {t("filmPolicy.ist_col_max_incentive")}
            </th>
            <th className="p-3 border">{t("filmPolicy.ist_col_max_grant")}</th>
          </tr>
        </thead>
        <tbody>
          {subsidyData.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3 border text-center">{item.slNo}</td>
              <td className="p-3 border">{item.purpose}</td>
              <td className="p-3 border text-center">{item.minInvestment}</td>
              <td className="p-3 border text-center">{item.subsidyPercent}</td>
              <td className="p-3 border text-center">{item.maxSubsidy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentSubsidyTable;
