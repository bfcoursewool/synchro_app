"""create KM ident table

Revision ID: 5e2144a12dd4
Revises: 
Create Date: 2017-01-18 15:24:21.073742

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '5e2144a12dd4'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    op.create_table(
      'km_idents',
      sa.Column('id', sa.Integer, primary_key=True),
      sa.Column('km_ident', sa.String(255), nullable=False),
      sa.Column('cart_string', sa.String(255), nullable=False),
      sa.Column('checkout_time', sa.DateTime, nullable=False)
    )


def downgrade():
    op.drop_table('km_idents')
