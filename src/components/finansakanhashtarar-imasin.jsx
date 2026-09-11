import React from "react";
import FinansakanHashtarar from "./finansakanhashtarar";

function FinansakanHashtarariMasin() {
  return (
    <div style={{ maxWidth: "850px", margin: "0 auto", padding: "20px", fontFamily: "Arial, sans-serif", color: "#222", lineHeight: "1.6" }}>
      {/* Գլխավոր վերնագիր */}
      <h1 style={{ fontSize: "26px", fontWeight: "bold", marginBottom: "20px", color: "#1a1a1a" }}>
        Ֆին. հաշտարար
      </h1>

      {/* Նկարագրական տեքստ */}
      <p style={{ fontStyle: "italic", marginBottom: "15px" }}>
        <strong>Ֆինանսական համակարգի հաշտարարի</strong> գրասենյակն անկախ կառավարման համակարգով կառույց է, որի հիմնադիրն է ՀՀ Կենտրոնական բանկը: <em>Հաշտարարի գրասենյակը կոչված է լուծելու ֆիզիկական անձ սպառողների և ֆինանսական կազմակերպությունների միջև ծագած գույքային վեճերը:</em>
      </p>

      <p style={{ fontStyle: "italic", fontWeight: "bold", marginBottom: "25px" }}>
        Հաշտարարի ծառայություններն անվճար են:
      </p>

      {/* Նպատակներ */}
      <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "15px" }}>
        Ֆինանսական համակարգի հաշտարարի գործունեության նպատակներն են՝
      </h3>

      <ul style={{ paddingLeft: "20px", marginBottom: "30px", listStyleType: "disc" }}>
        <li style={{ color: "#7e22ce", marginBottom: "10px" }}>
          <span style={{ color: "#222", fontWeight: "bold" }}>
            Ֆինանսական ոլորտում սպառողների իրավունքների ու շահերի պաշտպանությունը,
          </span>
        </li>
        <li style={{ color: "#7e22ce", marginBottom: "10px" }}>
          <span style={{ color: "#222", fontWeight: "bold" }}>
            Սպառողների պահանջների արագ, արդյունավետ և անվճար քննությունը,
          </span>
        </li>
        <li style={{ color: "#7e22ce", marginBottom: "10px" }}>
          <span style={{ color: "#222", fontWeight: "bold" }}>
            Ֆինանսական համակարգի նկատմամբ հանրության վստահության բարձրացումը:
          </span>
        </li>
      </ul>

      {/* Գրասենյակ և Կոնտակտներ */}
      <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "15px" }}>
        Ֆինանսական համակարգի հաշտարարի գրասենյակ՝
      </h3>

      <div style={{ marginBottom: "30px", lineHeight: "1.9" }}>
        <p style={{ margin: "4px 0" }}>
          <strong>Ֆինանսական համակարգի գլխավոր հաշտարար, Գրասենյակի կառավարիչ՝</strong> Վազգեն Մնացականյան
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Հաշտարար՝</strong> Փիրուզ Սարգսյան
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Հասցե՝</strong> ՀՀ, 0010, ք. Երևան, Մ. Խորենացու փող., 15, «Էլիտ Պլազա» բիզնես կենտրոն 7-րդ հարկ
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Հեռ.`</strong> +374 60 70-11-11
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Ֆաքս`</strong> +374 10 58-24-21
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Էլ. հասցե`</strong>{" "}
          <a href="mailto:info@fsm.am" style={{ color: "#7e22ce", textDecoration: "underline", fontWeight: "bold" }}>
            info@fsm.am
          </a>
          ,
        </p>
        <p style={{ margin: "4px 0" }}>
          <strong>Պաշտոնական կայք`</strong>{" "}
          <a
            href="https://www.fsm.am"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#7e22ce", textDecoration: "underline", fontWeight: "bold" }}
          >
            www.fsm.am
          </a>
        </p>
      </div>

      {/* Աշխատանքային ժամեր */}
      <h3 style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>
        Աշխատանքային ժամեր՝
      </h3>

      <p style={{ margin: 0 }}>
        <strong>Ֆինանսական համակարգի հաշտարարի գրասենյակը</strong> աշխատում է ամեն օր ժամը 09:00 - 18:00 (ընդմիջման ժամ 13:00-ից 14:00), բացի հանգստյան և տոն օրերից:
      </p>
    </div>
  );
}
export default FinansakanHashtarariMasin