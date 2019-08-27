import React, { Component } from 'react';
import BucketList from '../components/BucketList';
import LikeFrom from '../components/LikeFrom';
import '../style/pages_style.css';

// axios 통해 back에서 우리 group에 대한 bucket, like from data 가져오기
// 각 Tab에서 Component에 있는 Bucket 혹은 LikeFrom .js 불러와서 호출

class approval extends Component {
  render() {
    return [
      <ul className="nav nav-tabs">
        <li className="nav-item tab-item">
          <a className="nav-link active" data-toggle="tab" href="#like">
            LIKE FROM
          </a>
        </li>
        <li className="nav-item tab-item">
          <a className="nav-link" data-toggle="tab" href="#bucket">
            BUCKET
          </a>
        </li>
      </ul>,
      <div className="tab-content">
        <div className="tab-pane show active" id="like">
          <LikeFrom />
        </div>
        <div className="tab-pane" id="bucket">
          <BucketList />
        </div>
      </div>
    ];
  }
}
export default approval;
