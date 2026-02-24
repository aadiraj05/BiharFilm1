import React from "react";
import { useTranslation } from "react-i18next";

const FilmSubsidy = () => {
  const { t } = useTranslation();

  const data = [
    {
      slNo: 1,
      subsidy: t("filmPolicy.fs_sub1"),
      criteria: t("filmPolicy.fs_cri1"),
    },
    {
      slNo: 2,
      subsidy: t("filmPolicy.fs_sub2"),
      criteria: t("filmPolicy.fs_cri2"),
    },
  ];

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-300 mb-4">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">{t("filmPolicy.fs_col_slno")}</th>
            <th className="p-3 border">{t("filmPolicy.fs_col_subsidy")}</th>
            <th className="p-3 border">{t("filmPolicy.fs_col_criteria")}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              <td className="p-3 border text-center">{row.slNo}</td>
              <td className="p-3 border">{row.subsidy}</td>
              <td className="p-3 border">{row.criteria}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FilmSubsidy;
