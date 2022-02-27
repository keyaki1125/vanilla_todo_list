<<<<<<< CodeSandbox
import "./styles.css";

const onClickAdd = () => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
=======
/**
 * const, let等の変数宣言
 */

// var val1 = "var変数";
// console.log(val1);
>>>>>>> GitHub

<<<<<<< CodeSandbox
  createIncompleteList(inputText);
};
=======
// // var 変数は上書き可能
// val1 = "var変数を上書き";
>>>>>>> GitHub
// console.log(val1);

<<<<<<< CodeSandbox
// 未完了リストから指定の要素を削除(関数化)
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
=======
// // var変数は再宣言可能
// var val1 = "var変数を再宣言";
// console.log(val1);
>>>>>>> GitHub
};

<<<<<<< CodeSandbox
// 完了リストに追加する関数
const createIncompleteList = (text) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
=======
// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
>>>>>>> GitHub
// console.log(val2);

<<<<<<< CodeSandbox
  // li生成
  const li = document.createElement("li");
=======
// // letは再宣言不可
// let val2 = "let変数を再宣言"；
>>>>>>> GitHub
  li.innerText = text;

<<<<<<< CodeSandbox
  // button(完了)生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 完了ボタンが押された要素を未完了リストから削除して完了リストに追加する
=======
// const val3 = "const変数";
// console.log(val3);

// constは上書き不可
// val3 = "val3上書き";
>>>>>>> GitHub
    deleteFromIncompleteList(completeButton.parentNode);

<<<<<<< CodeSandbox
    // 完了リストに追加する要素
=======
// const val3 = "再宣言";
>>>>>>> GitHub
    const addTarget = completeButton.parentNode;

<<<<<<< CodeSandbox
    // todo内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    // div以下を初期化
    addTarget.textContent = null;

    // liタグを生成
    const li = document.createElement("li");
    li.innerText = text;

    // 戻すbutton生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // 押された戻すボタンの親タグを完了リストから削除
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      // テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
=======
/**
 * constで定義したオブジェクトはプロパティの変更・追加が可能
 * なのでオブジェクトの定義はconstでするのがベター
 */
// const val4 = {
//   name: "角刈り",
//   age: 34
// };
// console.log(val4);
// val4.name = "kakugari";
// console.log(val4);
// val4.address = "Kanagewa";

/**
 * constで定義した配列は要素の変更・追加が可能
 */
// const val5 = ["dog", "cat"];
// val5[0] = "raku";
// val5.push("monkey");
// console.log(val5);
>>>>>>> GitHub

<<<<<<< CodeSandbox
      createIncompleteList(text);
    });

    // divの子要素に各要素を設定
    addTarget.appendChild(li);
=======
/**
 * テンプレート文字列
 */
// const name = "角刈り";
// const age = 34;
>>>>>>> GitHub
    addTarget.appendChild(backButton);

<<<<<<< CodeSandbox
    // 完了リストに追加
    document.getElementById("complete-list").appendChild(addTarget);
  });
=======
// // 今までの方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);
>>>>>>> GitHub

<<<<<<< CodeSandbox
  // button(削除)生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押された削除ボタンの親タグ(div)を未完了リストから削除
    deleteFromIncompleteList(deleteButton.parentNode);
    // console.log(deleteTarget);
=======
// // テンプレート文字列を用いる方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
>>>>>>> GitHub
  });

<<<<<<< CodeSandbox
  // divの子要素に各要素を設定
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加
  document.getElementById("incomplete-list").appendChild(div);
};
=======
// 従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です。"));
>>>>>>> GitHub

<<<<<<< CodeSandbox
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

=======
// // アロー関数
// // 引数は一つの場合括弧を省略できる(可読性は下がる)
// // 関数内の処理がreturnの1行で完結できる場合は{}とreturnを省略できる。(func3参照)
// const func2 = (str) => {
>>>>>>> GitHub
//   return str;
// };
// console.log(func2("func2です。"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "角刈り",
//   age: 34,
//   address: '神奈川'
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

// const { name, address, age } = myProfile;  // オブジェクトから要素を取り出して分割代入
// const message2 = `名前は${name}です。年齢は${age}歳です。${address}に住んでます。`;
// console.log(message2);

// const myProfile = ['kakugari', 34];

// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です。`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "marugari") => console.log(`こんにちは！${name}さん！`);
// sayHello();

/**
 * スプレッド構文(...)
 */

// 配列の展開(pythonの　"*"のようなもの)
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

// まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(arr3);

// 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "角刈り"];
// for (let i = 0; i < nameArr.length; i++) {
//   console.log(nameArr[i]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// map関数は第二引数にインデックスが格納できる
// nameArr.map((name, i) => console.log(`${i + 1}番目は${name}です。`));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNamaArr = nameArr.map((name) => {
//   if (name === "角刈り") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });

// console.log(newNamaArr);

/**
 * 三項演算子
 */
// 条件式 ? Trueの時 : Falseの時
// const val1 = 1 > 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// // console.log(num.toLocaleString());

// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
// console.log(formattedNum);

// const checkSum = (num1, num2) => {
//   return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です。";
// };
// console.log(checkSum(50, 51));

/**
 * 論理演算子の本当の意味を知ろう && ||
 */
// const flag1 = true;
// const flag2 = false;

// if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }
// if (flag1 || flag2) {
//   console.log("1か2がtrueです");
// }

// || は左側がfalseなら右側を返す(=左側がtrueなら左側を返す。)
// const num = null;
// const fee = num || "金額未設定です。";
// console.log(fee);