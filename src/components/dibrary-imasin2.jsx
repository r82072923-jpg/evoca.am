import React from "react";

function DibraryiMasin2() {
  const highlightStyle = {
    color: "#7e22ce",
    fontWeight: "bold"
  };

  const textStyle = {
    fontSize: "15px",
    lineHeight: "1.7",
    color: "#222",
    fontWeight: "bold",
    marginBottom: "24px"
  };

  return (
    <div style={{ maxWidth: "850px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <p style={textStyle}>
        <span style={highlightStyle}>#dibrary</span>-ում կարելի է անվճար օգտվել էլեկտրոնային բիզնես ռեսուրսներից՝{" "}
        <span style={highlightStyle}>
          e-Duke Journals Scholarly Collection, ASTM Compass, Edward Elgar Publishing Journals, Mathematical Sciences Publishers Journals, Royal Society Journals Collection, SAGE Premier
        </span>{" "}
        և այլն...
      </p>
      <p style={textStyle}>
        <span style={highlightStyle}>#dibrary</span>-ի գրքերը, հոդվածները և հրապարակումները շարունակաբար համալրվելու են՝ ներառելով նաև համաշխարհային լավագույն համալսարանների փակ վճարովի ռեսուրսները: Բացի էլեկտրոնային նյութերից,{" "}
        <span style={highlightStyle}>#dibrary</span>-ում կարելի է գտնել նաև դասական գրքեր, ինչպես նաև ժամանակակից բիզնես գրականության բեսթսելերները, որոնք կարելի է կարդալ տեղում, իսկ ցանկության դեպքում՝ նաև տանել տուն:
      </p>
      <p style={textStyle}>
        <span style={highlightStyle}>#dibrary</span>-ի բացման գործում մեզ աջակցել են՝{" "}
        <span style={highlightStyle}>
          DLAA-ը՝ Հայաստանի թվային գրադարանների ասոցիացիան (Digital Library Association of Armenia), Ավետիք Իսահակյանի անվան գրադարանը և American Corner Yerevan-ը
        </span>
        : Նրանց աջակցության շնորհիվ <span style={highlightStyle}>#dibrary</span>-ում կարելի է անվճար օգտվել այնպիսի հրատարակիչների նյութերից, որոնց անդամակցությունը բավականին թանկ է և շատերի համար՝ անհասանելի:
      </p>
    </div>
  );
}
export default DibraryiMasin2