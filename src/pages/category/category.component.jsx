import './category.style.scss';
import CollectionItem from '../../Components/collection-item/collection-item.component';

const CategoryPage = ({ match }) => {
  console.log(match.params.categoryId);

  return (
    <div className="category">
      <h2>CATEGORY PAGE</h2>
    </div>
  );
};
export default CategoryPage;
