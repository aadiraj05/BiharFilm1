import React from "react";
import { useTranslation } from "react-i18next";

const FilmSubsidyTable = () => {
  const { t } = useTranslation();

  const filmData = [
    {
      filmNo: t("filmPolicy.fst_film1"),
      ranges: [
        {
          subsidy: t("filmPolicy.fst_1_sub1"),
          criteria: t("filmPolicy.fst_1_cri1"),
        },
        {
          subsidy: t("filmPolicy.fst_1_sub2"),
          criteria: t("filmPolicy.fst_1_cri2"),
        },
      ],
    },
    {
      filmNo: t("filmPolicy.fst_film2"),
      ranges: [
        {
          subsidy: t("filmPolicy.fst_2_sub1"),
          criteria: t("filmPolicy.fst_2_cri1"),
        },
        {
          subsidy: t("filmPolicy.fst_2_sub2"),
          criteria: t("filmPolicy.fst_2_cri2"),
        },
      ],
    },
    {
      filmNo: t("filmPolicy.fst_film3"),
      ranges: [
        {
          subsidy: t("filmPolicy.fst_3_sub1"),
          criteria: t("filmPolicy.fst_3_cri1"),
        },
        {
          subsidy: t("filmPolicy.fst_3_sub2"),
          criteria: t("filmPolicy.fst_3_cri2"),
        },
      ],
    },
  ];

  return (
    <div className="p-4 overflow-x-auto">
      <table className="min-w-full text-sm text-left border border-gray-300">
        <thead className="bg-gray-100">
          <tr>
            <th className="p-3 border">{t("filmPolicy.fst_col_category")}</th>
            <th className="p-3 border">{t("filmPolicy.fst_col_subsidy")}</th>
            <th className="p-3 border">{t("filmPolicy.fst_col_criteria")}</th>
          </tr>
        </thead>
        <tbody>
          {filmData.map((film, index) =>
            film.ranges.map((range, i) => (
              <tr key={`${index}-${i}`} className="hover:bg-gray-50">
                {i === 0 && (
                  <td
                    rowSpan={film.ranges.length}
                    className="p-3 border font-medium bg-gray-50 align-middle text-center"
                  >
                    {film.filmNo}
                  </td>
                )}
                <td className="p-3 border">{range.subsidy}</td>
                <td className="p-3 border">{range.criteria}</td>
              </tr>
            )),
          )}
        </tbody>
      </table>
    </div>
  );
};

export default FilmSubsidyTable;
